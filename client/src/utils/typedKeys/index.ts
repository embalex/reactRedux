export const typedKeys = <T extends {}>(obj: T): Array<keyof T> => (
    Object.keys(obj) as unknown as Array<keyof T>
);
