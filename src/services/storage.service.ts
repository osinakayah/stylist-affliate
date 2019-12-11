export const StorageService = {
    saveToken: (token: string) => localStorage.setItem('@stylist', token),
    getToken: (): string | null => localStorage.getItem('@stylist'),
    removeToken: () => localStorage.removeItem('@stylist'),

    saveData: (key: string, value: string) => localStorage.setItem(`@stylist-${key}`, value),
    getData: (key: string): string | null => localStorage.getItem(`@stylist-${key}`),
    removeData: (key: string) => localStorage.removeItem(`@stylist-${key}`),
};
