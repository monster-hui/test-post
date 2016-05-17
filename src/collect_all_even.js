
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
 var same_elements=[];
 var num=0;
 for(var i=0;i<collection_a.length;i++){
	 for(var j=0;j<object_b.value.length;j++){
 		 var a=collection_a[i].key;
 		 var b=object_b.value[j];
 		 if(a==b){
 			 same_elements[num]=a;
 			 num++;
 			 }
		 }
	 }
 return same_elements;
}

module.exports = collect_same_elements;
