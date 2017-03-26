#include <Streaming.h>
int led = 13;
unsigned long current_time;
unsigned long last_send;
bool a_or_b = true;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop() {

  current_time = millis();

  if(current_time-last_send >= 100) {
    if(a_or_b) {
      Serial << "<< ";
      Serial << "@" << "H" << 1 << "," << (int)random(1, 7);
      Serial << "," << "I" << 0 << "," << (int)random(1, 7);
      Serial << "!" << endl;
      digitalWrite(led, HIGH);
    } else {
      Serial << "<< ";
      Serial << "@" << "H" << 0 << "," << (int)random(1, 7);
      Serial << "," << "I" << 1 << "," << (int)random(1, 7);
      Serial << "!" << endl;
      digitalWrite(led, LOW);
    }
    last_send = current_time;
  }

  if(Serial.available()) {
    char c = Serial.read();
    switch(c) {
      case 'A': // forward
      Serial << "<< ";
      Serial << "#" << "L" << 1 << "," << 255;
      Serial << "," << "R" << 1 << "," << 255;
      Serial << "!" << endl;
      break;
      case 'B': // backward
      Serial << "<< ";
      Serial << "#" << "L" << 0 << "," << 255;
      Serial << "," << "R" << 0 << "," << 255;
      Serial << "!" << endl;
      break;
      case 'C': // left
      Serial << "<< ";
      Serial << "#" << "L" << 0 << "," << 255;
      Serial << "," << "R" << 1 << "," << 255;
      Serial << "!" << endl;
      break;
      case 'D': // right
      Serial << "<< ";
      Serial << "#" << "L" << 1 << "," << 255;
      Serial << "," << "R" << 0 << "," << 255;
      Serial << "!" << endl;
      break;
      case 'E': // sequence
      Serial << "<< ";
      Serial << "#" << "G" << 0 << "," << 1;
      Serial << "," << "0" << 0 << "," << 0;
      Serial << "!" << endl;
      break;
    }
  }
  
}

