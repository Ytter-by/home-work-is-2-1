const create_triangle_list = (side1_list, side2_list, side3_list) => {
    const triangle_list = [];
    for (let i = 0; i < side1_list.length; i++) {
        triangle_list[i] = {
            side1: side1_list[i],
            side2: side2_list[i],
            side3: side3_list[i]
        };
    }
    return triangle_list;
};

const side1_list = prompt("Введите список длин сторон 1, разделенных запятыми:").split(",").map(Number)
const side2_list = prompt("Введите список длин сторон 2, разделенных запятыми:").split(",").map(Number)
const side3_list = prompt("Введите список длин сторон 3, разделенных запятыми:").split(",").map(Number)

const triangleList = create_triangle_list(side1_list, side2_list, side3_list);

console.log("Список треугольников:");
for (let i = 0; i < triangleList.length; i++) {
    const triangle = triangleList[i];
    console.log(`Треугольник ${i + 1}: стороны (${triangle.side1}, ${triangle.side2}, ${triangle.side3})`);
}