export function moveToTop(list: string[], indexFrom: number): string[] {
    // splice can be used to remove elements, elements, or replace elements in an array
    // (to, 0, this.splice(from, 1)[0]);
    const to = 0
    list.splice(to, 0, list.splice(indexFrom, 1)[0]);
    return list;
}
