function localtunnel {
  lt -s gnfdduwvjdla3332 --port 8080
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done