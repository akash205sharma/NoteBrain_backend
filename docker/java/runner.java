public class runner {
    public static void main(String[] args) {
        try {
            UserCode.main(args);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
