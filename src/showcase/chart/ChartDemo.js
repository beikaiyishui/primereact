import React, {Component} from 'react';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class ChartDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Charts</h1>
                        <p>Chart components are based on <a href="http://www.chartjs.org/">Charts.js</a> 2.1.x, an open source HTML5 based charting library.</p>
                    </div>
                </div>

                <ChartDoc />
            </div>
        )
    }
}

class ChartDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <h3>Chart Component</h3>
                <p>Chart component is used to display a chart on page. The classname is UIChart and element tag is p-chart.</p>

                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Chart} from 'primereact';

`}
</CodeHighlight>

                <p>Attributes of Chart Component.</p>

                        <h3>Attributes</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>type</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Type of the chart.</td>
                                    </tr>
                                    <tr>
                                        <td>data</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Data to display.</td>
                                    </tr>
                                    <tr>
                                        <td>options</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Options to customize the chart.</td>
                                    </tr>
                                    <tr>
                                        <td>width</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Width of the chart in non-responsive mode.</td>
                                    </tr>
                                    <tr>
                                        <td>height</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Height of the chart in non-responsive mode.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Methods</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>refresh</td>
                                        <td>-</td>
                                        <td>Redraws the graph.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Chart Types</h3>
                        <p>Chart type is defined using the type property. Currently there are 6 options available; pie, doughtnut, line, bar, radar and polarArea.</p>

                        <h3>Data</h3>
                        <p>Data of a chart is provided using a binding to the data property, each type has its own format of data. Here is an example of a line chart.</p>

<CodeHighlight className="language-markup">
{`
<Chart type="line" data={data} />

`}
</CodeHighlight>

<CodeHighlight className="language-markup">
{`
render() {
var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
        }
    ]   
};

`}
</CodeHighlight>

<h3>Options</h3>
<p>While a series can be customized per dataset, general chart options are defined with options property. 
    Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js documentation.</p>

    <CodeHighlight className="language-markup">
{`
<Chart type="line" data={data} options={options}/>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
render() {
var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
        }
    ]   

    this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }
};

`}
</CodeHighlight>
            </div>
        )
    }
}