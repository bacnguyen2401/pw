self.addEventListener('push',() => {
    self.registration.sendMptofication('test message',{});
});

