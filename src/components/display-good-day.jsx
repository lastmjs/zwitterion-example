class DisplayGoodDay extends React.Component {
    render() {
        return(
            <div>
                <div>Good day! I am a React component written with JSX</div>
                <br></br>
            </div>
        );
    }
}

ReactDOM.render(
    <DisplayGoodDay />,
    document.getElementById('display-good-day')
);
