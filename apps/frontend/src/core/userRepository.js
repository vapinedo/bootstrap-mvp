// core/userRepository.js
// Ejemplo de repository específico para usuarios
import { Repository } from './repository';
import { USER_ENDPOINTS } from '@shared/constants/userEndpoints';

export const userRepository = new Repository(USER_ENDPOINTS.base);
