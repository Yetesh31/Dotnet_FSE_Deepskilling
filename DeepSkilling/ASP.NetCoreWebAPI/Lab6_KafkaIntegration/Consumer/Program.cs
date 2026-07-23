using Confluent.Kafka;

var config = new ConsumerConfig
{
    BootstrapServers = "localhost:9092",
    GroupId = "chat-group",
    AutoOffsetReset = AutoOffsetReset.Earliest
};

using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();

consumer.Subscribe("chat-topic");

Console.WriteLine("Kafka Consumer Started");
Console.WriteLine("Waiting for messages...");

while (true)
{
    try
    {
        var result = consumer.Consume();

        Console.WriteLine($"Received: {result.Message.Value}");
    }
    catch (ConsumeException ex)
    {
        Console.WriteLine(ex.Error.Reason);
    }
}