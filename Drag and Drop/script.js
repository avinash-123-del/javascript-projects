const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
const message = document.getElementById('message')
const message_display = document.createElement("p")
const reset_btn = document.getElementById('reset')

for (let i = 0; i < list_items.length; i++) {

	const item = list_items[i];

					
	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
			lists[1].classList.add('list_1')
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
			message.appendChild(message_display);
			message_display.classList.add('message')
			message_display.innerText = `Item dropped`;
			lists[1].classList.remove('list_1')
			list_items[i].classList.add('list_items_change')
		}, 0);

		setTimeout(function () {
			message_display.innerHTML = null
			message_display.classList.remove('message')
		},1000)
	});

	for (let j = 0; j < lists.length; j++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
			message_display.innerText = ``;
		});

		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
		
		list.addEventListener('drop', function (e) {
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
		
		reset_btn.addEventListener('click', function () {
			lists[0].append(item)
			list_items[i].classList.remove('list_items_change')
		});
	}
}


