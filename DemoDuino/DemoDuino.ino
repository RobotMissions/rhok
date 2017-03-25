#include <Streaming.h>
int led = 13;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop() {
  Serial << "<< ";
  Serial << "@" << "H" << 1 << "," << (int)random(1, 7);
  Serial << "," << "I" << 0 << "," << (int)random(1, 7);
  Serial << "!" << endl;
  digitalWrite(led, HIGH);
  delay(100);
  Serial << "<< ";
  Serial << "@" << "H" << 0 << "," << (int)random(1, 7);
  Serial << "," << "I" << 1 << "," << (int)random(1, 7);
  Serial << "!" << endl;
  digitalWrite(led, LOW);
  delay(100);
}

