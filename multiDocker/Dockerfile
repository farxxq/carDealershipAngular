# Stage 1: Initial
FROM ubuntu AS initial
RUN apt-get update && apt-get install -y curl
RUN echo "Assalamwalaikum meri noor!, this is multi stage inital thing" > /message1.txt

# Stage 2: Middle
FROM node AS middle
RUN echo "Assalamwalaikum meri noor!, this is multi stage middle thing" > /message2.txt

# Stage 3: Final
FROM ubuntu AS final
COPY --from=initial /message1.txt /message1.txt
COPY --from=middle /message2.txt /message2.txt
CMD ["sh", "-c", "cat /message1.txt && cat /message2.txt"]
