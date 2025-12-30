import { Card } from '@shared/components';
import { useUsersQuery } from '@modules/user/api/useUsersQuery';

export const UserAdminPage = () => {
	const { data: users, isLoading, error } = useUsersQuery();

	return (
		<Card>
			<h2>Lista de Usuarios</h2>
			{isLoading && <div>Cargando usuarios...</div>}
			{error && <div>Error: {error.message}</div>}
			<ul>
				{users?.map((user) => (
					<li key={user.id}>{user.name || user.email}</li>
				))}
			</ul>
		</Card>
	);
};
