import React, { useState } from 'react';
import { useUsers, useDeleteUser, useCreateUser } from '../../user.hooks';
import { Card, Table, Button } from 'tabler-react';
export function UserAdminPage() {
	const { data: users, isLoading, isError, error } = useUsers();
	const deleteUser = useDeleteUser();
	const editUser = useCreateUser();
	const [selectedUser, setSelectedUser] = useState(null);
	const [editUserData, setEditUserData] = useState(null);
		const handleDelete = (id) => {
			if (window.confirm('¿Seguro que deseas eliminar este usuario?')) {
				deleteUser.mutate(id);
			}
		};
		const handleEdit = (user) => {
			setEditUserData({ ...user });
		};
		const handleEditChange = (e) => {
			const { name, value } = e.target;
			setEditUserData((prev) => ({ ...prev, [name]: value }));
		};
		const handleEditSubmit = (e) => {
			e.preventDefault();
			if (!editUserData) return;
			editUser.mutate(editUserData, {
				onSuccess: () => setEditUserData(null),
			});
		};
	return (
		<Card>
			<Card.Header>
				<Card.Title>Usuarios</Card.Title>
			</Card.Header>
			<Card.Body>
				{isLoading ? (
					<div>Cargando usuarios...</div>
				) : isError ? (
					<div style={{ color: 'red' }}>{error.message}</div>
				) : (
					<Table responsive>
						<thead>
							<tr>
								<th>ID</th>
				<th>Email</th>
				<th>Nombre</th>
				<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{users && users.length > 0 ? (
								users.map((user) => (
									<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.email}</td>
					<td>{user.name || '-'}</td>
															<td style={{ display: 'flex', gap: 8 }}>
																<Button color="primary" size="sm" onClick={() => setSelectedUser(user)}>
																	Ver
																</Button>
																<Button color="warning" size="sm" onClick={() => handleEdit(user)}>
																	Editar
																</Button>
																<Button color="danger" size="sm" loading={deleteUser.isLoading && deleteUser.variables === user.id} onClick={() => handleDelete(user.id)}>
																	Eliminar
																</Button>
															</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={4} style={{ textAlign: 'center' }}>No hay usuarios</td>
								</tr>
							)}
						</tbody>
					</Table>
				)}
				{selectedUser && (
					<div style={{ marginTop: 24, padding: 16, border: '1px solid #eee', borderRadius: 8, background: '#fafbfc' }}>
						<h4>Detalle de usuario</h4>
						<div><b>ID:</b> {selectedUser.id}</div>
			<div><b>Email:</b> {selectedUser.email}</div>
			<div><b>Nombre:</b> {selectedUser.name || '-'}</div>
			<Button color="secondary" size="sm" style={{ marginTop: 12 }} onClick={() => setSelectedUser(null)}>
							Cerrar
						</Button>
					</div>
				)}
				{editUserData && (
					<div style={{ marginTop: 24, padding: 16, border: '1px solid #eee', borderRadius: 8, background: '#fafbfc' }}>
						<h4>Editar usuario</h4>
						<form onSubmit={handleEditSubmit}>
							<div style={{ marginBottom: 12 }}>
								<label>Email:</label>
								<input
									type="email"
				  name="email"
				  value={editUserData.email || ''}
				  onChange={handleEditChange}
				  className="form-control"
				  required
				  style={{ width: '100%' }}
								/>
							</div>
							<div style={{ marginBottom: 12 }}>
								<label>Nombre:</label>
								<input
									type="text"
				  name="name"
				  value={editUserData.name || ''}
				  onChange={handleEditChange}
				  className="form-control"
									style={{ width: '100%' }}
								/>
							</div>
							<div style={{ display: 'flex', gap: 8 }}>
								<Button color="primary" size="sm" type="submit" loading={editUser.isLoading}>
									Guardar
								</Button>
								<Button color="secondary" size="sm" onClick={() => setEditUserData(null)}>
									Cancelar
								</Button>
							</div>
							{editUser.isError && (
								<div style={{ color: 'red', marginTop: 8 }}>{editUser.error.message}</div>
							)}
						</form>
					</div>
				)}
			</Card.Body>
		</Card>
	);
}
