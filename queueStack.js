//queueStack (solution) 

var Stack = function () {
	var storage = [];
	var length = 0;
	
	this.push = function (value) {
		storage[length++] = value;
	};

	this.pop = function () {
		if (length) {
			var value = storage[--length];
			delete storage[length];
			return value;
		}
	};

	this.size = function () {
		return length;
	}
}

var Queue = function () {
	var inbox = new Stack();
	var outbox = new Stack();

	this.enqueue = function (item) {
		inbox.push(item)
	};

	this.dequeue = function () {
		if(outbox.size() === 0) {
			while(inbox.size() !== 0) {
				outbox.push(inbox.pop());
			}
		}
		return outbox.pop();
	};

	this.size = function () {
		return inbox.size() + outbox.size();
	};
}