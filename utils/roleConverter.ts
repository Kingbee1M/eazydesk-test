export const roleConverter = (roleId: number | string): string => {
    switch (roleId) {
        case 1: return 'Administrator';
        case 2: return 'Agent';
        case 3: return 'Customer';
        default: return 'User';
    }
};