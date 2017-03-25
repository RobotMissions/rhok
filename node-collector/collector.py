import serial
ser = serial.Serial('/dev/cu.usbserial-AL00ESDG', 9600)
while True:
  c = ser.readline()
  print(c)
