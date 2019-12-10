export const StorageService = {
    saveToken: (token: string) => localStorage.setItem('@stylist', token),
    getToken: (): string | null => localStorage.getItem('@stylist'),
    removeToken: () => localStorage.removeItem('@stylist'),
};
