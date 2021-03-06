import React from 'react';
import ReactDom from 'react-dom';
import Cohortpanel from './components/Cohortpanel'


var width = 1000,
	height = 500,
	plotType = 'volcano',
	dataset = new Array;



var renderModule = function(node){

	const cleandata = dataset.filter((d)=>d.logPval!==null && !isNaN(d.logPval) ).map((d,i)=>{
		let item = {};
		Object.assign(item,d);
		item.id = i;
		item.type = 'metabolite';
		return item;
	});
    	
    
	ReactDom.render(
	<Cohortpanel width={width} height ={height} dataset={cleandata} defaultType={plotType} />,
	node.node()
	)
};

renderModule.bindData = function(data){
	if(!arguments.length) return dataset;
	dataset = [...data];
	return this;
}


renderModule.setHeight = function(data){
	if(!arguments.length) return height;
	height = data;
	return this;
}

renderModule.setWidth = function(data){
	if(!arguments.length) return dataset;
	width = data;
	return this;
}

renderModule.setType = function(data){
	if(!arguments.length) return plotType;
	plotType = data;
	return this;
}

renderModule.remove = function(node){
	ReactDom.unmountComponentAtNode(node.node());
}

module.exports = renderModule;