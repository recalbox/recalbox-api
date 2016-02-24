#include <node.h>
#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <SDL2/SDL.h>

namespace recalbox {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void getJoystickCount(const FunctionCallbackInfo<Value>& args) {
    SDL_InitSubSystem(SDL_INIT_JOYSTICK);
    SDL_JoystickEventState(SDL_ENABLE);

    int joystickCount = SDL_NumJoysticks();
    char response[] = "0";
    sprintf(response, "%d", joystickCount);

    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(String::NewFromUtf8(isolate, response));
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "getJoystickCount", getJoystickCount);
}

NODE_MODULE(addon, init)

}
