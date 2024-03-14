export interface UserData {
    name: string;
    phone: string;
    email: string;
    address: string;
    hire_date: string;
    position_name: string;
    department: string;
};

export const formatData = (data: UserData) => {
    return {
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        hire_date: data.hire_date,
        position_name: data.position_name,
        department: data.department
    };
};