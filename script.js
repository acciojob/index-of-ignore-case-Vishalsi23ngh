function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let ans = -1;
	let val = s2.charAt(0);
	for(let i = 0; i < s1.length; i++){
		if(val.toLowerCase() === s2.charAt(i).toLowerCase()){
			ans = i;
		}
	}
	return ans;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
