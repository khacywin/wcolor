/// <reference types="react" />
interface Props {
    onChange: (value: string) => void;
    defaultValue?: string;
    width?: number;
    height?: number;
}
declare function App(props: Props): JSX.Element;
export default App;
