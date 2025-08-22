export default function Log({turns}) {
    // learn more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return (
        <ol id="log">
            {turns.map(turn => 
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row}, {turn.square.col}
                </li>
            )}
        </ol>
    )
}