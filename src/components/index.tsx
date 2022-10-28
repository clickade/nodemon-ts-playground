import { renderToString } from 'react-dom/server';

// Strips the children key from props so we may pass the rest of the props as tag attributes
export const getChildlessProps = (props: any) => Object.fromEntries(Object.entries(props).filter(([key])=>key!=='children'));

// Simple JSX component
export const HelloWorld = (props: any) => <div id="says-hello" data-tag='extra variable' {...getChildlessProps(props)}>{props.children}</div>;
export const GoodbyeWorld = (props: any) => <div id="says-goodbye" data-tag='extra stuff' {...getChildlessProps(props)}/>; // Note no children component here

// Converts JSX into a React string
export const HelloWorldString = renderToString(<HelloWorld>Hello World!</HelloWorld>);
export const GoodbyeWorldString = renderToString(<GoodbyeWorld>Goodbye World!</GoodbyeWorld>); // Does not render children