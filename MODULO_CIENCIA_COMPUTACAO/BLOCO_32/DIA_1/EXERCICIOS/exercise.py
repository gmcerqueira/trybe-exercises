# Exercício 1
def highest_number(num1, num2):
    if(num1 > num2):
        return num1

    return num2


# Exercício 2
def arithmetic_average(list_num):
    length = len(list_num)
    sum = 0

    for num in list_num:
        sum += num

    return sum/length


# Exercício 3
def draw_square(side):
    for row in range(side):

        print(side*'*')


# Exercício 4
def biggest_name(name_list):
    result_name = ''
    for name in name_list:
        if(len(name) > len(result_name)):
            result_name = name
    return result_name


# Exercício 5
def calculate_paint_quantity(square_meters):
    paint_meters_coverage_by_litter = 3
    can_capacity = 18
    can_price = 80

    litters_necessary = square_meters/paint_meters_coverage_by_litter
    cans_necessary = litters_necessary//can_capacity

    if litters_necessary % can_capacity:
        cans_necessary += 1

    total = can_price*cans_necessary

    return cans_necessary, total


# Exercício 6
def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )

    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


print(highest_number(100, 50))
print(arithmetic_average([1, 2, 3]))
draw_square(4)
print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
print(calculate_paint_quantity(6*18))
