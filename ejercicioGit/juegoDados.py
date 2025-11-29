import random
print ("Debes obtener mas de 8 para salvarte")
input ("Preciona enter para lanzar el dado")
valor1=random.randint(1,6)
valor2=random.randint(1,6)
total=valor1+valor2
print(f"Obtuviste un {valor1} y un {valor2} un total de {total}")
if total>8:
     print("Felicidades Ganaste")
     print("Estas de Suerte")
else: print("Lo siento no es tu dia de suerte, no te salvas")
