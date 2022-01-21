const r_back = document.getElementById('r_back');
r_back.addEventListener('click', e => { window.history.go(-1) });

const params = new URLSearchParams(window.location.search);

const type = params.get('type');
const path = params.get('path');
const path_task = params.get('path_task');

async function init_content(type, path, path_task) {
	let d_lower = document.getElementById("d_lower");
	d_lower.innerHTML = "";
	if (type == "text") {
		const response = await fetch(path);
		const data = await response.text();
				
		let newElem = document.createElement("div");
		newElem.id = "d_text";
		newElem.innerHTML = data;
		
		d_lower.append(newElem);
	} else if (type == "html") {
		const response = await fetch(path_task);
		const data = await response.text();
				
		let taskElem = document.createElement("div");
		taskElem.id = "d_task";
		taskElem.innerHTML = data;
			
		let iframeElem = document.createElement("iframe");
		iframeElem.src = path;
					
		d_lower.append(taskElem);
		d_lower.append(iframeElem);
	}
}

init_content(type, path, path_task);
