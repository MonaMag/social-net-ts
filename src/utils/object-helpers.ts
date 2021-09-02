


//создаем универсальную функцию, которая будет пробегаться по массиву и искать нужное совпадение и менять в этом объекте что-то, те чтобы иммютабельно менять объекты внутри массива, которая будет использоваться во всех редюсерах:

export const updateObjectInArray = (items: any[], itemId: number, objPropName: string, newObjProps: any) => {
    return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}