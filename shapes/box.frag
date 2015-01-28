float box(vec2 _st, vec2 _size){
  _size = vec2(0.5)-_size*0.5;
  vec2 uv = smoothstep(_size,_size+vec2(0.0001),_st);
  uv *= smoothstep(_size,_size+vec2(0.0001),vec2(1.0)-_st);
  return uv.x*uv.y;
}

void main(){
  vec2 st = v_texcoord;
  vec3 color = vec3( box(st, vec2(0.9)) );

  gl_FragColor = vec4(color,1.0);
}