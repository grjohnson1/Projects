import { StrictMode } from "react";

export default function Learning() {
    return (
        <section id="Learning">
            <h2>Learning Notes</h2>
            <ol>
                <li>Narrow down the area of problem.</li>
                <li>Use Debugger tool such as Chrome Developer Tool and go to Console tab which will show error.</li>
                <li>Duration can not be below zero. If it is then page doesn't load. Fix by checking for a lenght of 0 and returning error message.</li>
                <li>Go to the Source tab and add break points to identify information.</li>
                <li>Text inputs will pass strings. Adding a + before the value name will make the value be a number. (Shown when results seem to concatenate)</li>
                <li>Surrounding areas In &lt;StrictMode /&gt; will execute the area twice which could expose errors. This functionality will not be promoted to live production build. So safe from performance issues.</li>
                <li>Simply add "import { StrictMode } from 'react';"</li>
                <li>React DevTools will allow for you to alter the information directly without need to update the site.</li>
            </ol>
        </section>
    )
}