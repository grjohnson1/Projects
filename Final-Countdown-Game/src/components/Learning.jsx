export default function Learning() {
    return (
        <section id="Learning">
            <ol>
                <li>React Ref will allow access to the DOM element completely. Slimming down the code.</li>
                <li>Ref name.current. is the way to gain access to everything the DOM has access too. Compare build 2 to 3 for example.</li>
                <li>Changes should happen in React for DOM changes and not directly to DOM. So be careful.</li>
                <li>Need to use useState with Ref if otherwise it will be undefined in first instanced and the Ref doesn't re-execute.</li>
                <ul>
                    <li>State - re-evaluate when changed. Refs - do not re-evaluate.</li>
                    <li>State - good for values that are directly reflected in the UI. Refs - great for reading values or accessing certain browser APIs.</li>
                    <li>Do not use State when values have no direct UI impact or "behind the scenes".</li>
                </ul>
                <li>Refs on multiple used components can be safer when used on the component.</li>
                <li>If you need to remember something when state changes Refs is what should be used.</li>
                <li>Having a form method of dialog will have the default functionality of a Close button without the need of logic/code to close the dialog required.</li>
                <li>useImperativeHandle allows the connection of a child component to hold functionality related directly to component. Meaning that tied relationships are 
                    comparmentalized with the component making changes easier to be altered if required.</li>
            </ol>
        </section>
    )
}