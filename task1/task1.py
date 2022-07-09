import sympy
import time

def simple(number_of_digits) -> list:
    start = 1
    final_list = []
    while True:
        if sympy.isprime(start):
            final_list.append(start)
        if len(final_list) == number_of_digits:
            return final_list
        start += 1


number_of_digits = int(input("---: "))

start_time = time.time()
print(simple(number_of_digits))
print("--- %s seconds ---" % (time.time() - start_time))

