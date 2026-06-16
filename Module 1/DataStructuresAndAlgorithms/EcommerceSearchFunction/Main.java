public class Main {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories")
        };

        Product linearResult =
                SearchService.linearSearch(products, "Phone");

        if (linearResult != null) {
            System.out.println("Linear Search Found: "
                    + linearResult.productName);
        }

        Product binaryResult =
                SearchService.binarySearch(products, "Watch");

        if (binaryResult != null) {
            System.out.println("Binary Search Found: "
                    + binaryResult.productName);
        }
    }
}