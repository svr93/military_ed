sudo iptables -I INPUT -p tcp --dport 80 -m state --state NEW -j ACCEPT
sudo node generator.js &
sudo node server.js
