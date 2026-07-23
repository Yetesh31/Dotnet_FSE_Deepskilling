using System;

namespace Producer
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Kafka Producer Started");

            while (true)
            {
                Console.Write("Enter Message : ");

                string message = Console.ReadLine();

                if (string.IsNullOrEmpty(message))
                    break;

                Console.WriteLine($"Message Sent : {message}");
            }
        }
    }
}