import React from 'react';


function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

const renderItems = (items) => _.map(items, (item, index)  => {
  return  <article>
    <div className="left">
      <h4>{index + 1}. {item.container.name.substr(5)} </h4>
    </div>
    <div className="right">
      <h4>{bytesToSize(item.networks.cali0.tx_bytes)}/{bytesToSize(item.networks.cali0.rx_bytes)} </h4>
    </div>
  </article>
});

/**
 * A component for CPU Utilization visualization.
 * @param props React component properties
 * @constructor
 */
const Network = (props) => <section id="network" className="overall-over">
  { renderItems(props.items) }
</section>;



export default Network;
