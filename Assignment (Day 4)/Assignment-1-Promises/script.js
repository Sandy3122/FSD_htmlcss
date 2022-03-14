let list=['seeram', 'sandeep', 'lakshman', 'kumar'];

  // To See the error, please uncomment the bottom list and and comment the above list.

// let list=['seeram', 'sandeep', 'lakshman', 'kumar',22];

var makeAllCaps=new Promise(function(resolve,reject){
	var san =0;
	for(var i=0;i<list.length;i++){
		if(typeof(list[i])=="string")
    {
		san++;
    }
		
		else
    {
		reject("THE ALL ELEMENTS CONTAINING IN THE LIST ARE NOT STRINGS ");
		}

		if(san==list.length){
			resolve(capitalize(list))
			}
		}
	})

function capitalize(val){
  for(var i=0;i<list.length;i++)
  {
	val[i]=val[i].toUpperCase()
	}
	return(sortwords(val))
	}

function sortwords(val)
  {
	return val.sort();
	}

makeAllCaps
.then(val1=>console.log(val1))
.catch(val2=>console.log(`Error : ${val2}`));

