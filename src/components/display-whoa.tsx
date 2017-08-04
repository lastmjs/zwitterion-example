const whoa: string = 'Whoa! I am a React component written with TSX';

class DisplayWhoa extends React.Component {
    render() {
        return(
            <div>
                <div>{whoa}</div>
                <br></br>
            </div>
        );
    }
}

ReactDOM.render(
    <DisplayWhoa />,
    document.querySelector('display-whoa')
);
