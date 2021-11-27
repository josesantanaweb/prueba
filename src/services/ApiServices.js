import api from '../config/api';

const ApiServices = {
	getConfig: (data) => api.post('/proyect/config/consult', data),
	getDocument: (data) => api.post('/invoices/consult', data),
};

export default ApiServices;
