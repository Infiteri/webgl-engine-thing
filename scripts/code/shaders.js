export const vsSource = `
    attribute vec3 position;
    
    uniform mat4 projection;
    uniform mat4 model;

    void main() {
        gl_Position = projection * model * vec4(position, 1.0);
    }
`;

export const fsSource = `
    precision mediump float;

    uniform vec4 color;

    void main() {
        gl_FragColor = color;
    }
`;
