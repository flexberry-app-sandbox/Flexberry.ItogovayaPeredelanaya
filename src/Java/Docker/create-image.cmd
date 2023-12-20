docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itogovaya_peredelanaya-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itogovaya_peredelanaya-java/app ../../..
