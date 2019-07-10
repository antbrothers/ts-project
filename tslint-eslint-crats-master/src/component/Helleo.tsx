import * as React from "react";
// expect interface Props {
//   name: string;
//   enthusiasmLevel?: number;
// }
// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }
// function Hello({ name, enthusiasmLevel = 1 }: Props) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D')
//   }
//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }
// export default Hello;

class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        
      </div>
    );
  }
}