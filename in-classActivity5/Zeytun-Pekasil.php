<?php
$exchangeRates = array(
    "USD_CAD" => 1.36,
    "USD_EUR" => 0.92,
    "CAD_USD" => 0.74,
    "CAD_EUR" => 0.68,
    "EUR_USD" => 1.09,
    "EUR_CAD" => 1.47
);

$convertedAmount = "";
$amount = isset($_GET["amount"]) ? floatval($_GET["amount"]) : "";
$from = isset($_GET["from_currency"]) ? $_GET["from_currency"] : "USD";
$to = isset($_GET["to_currency"]) ? $_GET["to_currency"] : "USD";

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["amount"])) {
    if (!empty($amount) && $from && $to) {
        if ($from === $to) {
            $convertedAmount = $amount;
        } else {
            $key = "{$from}_{$to}";
            if (isset($exchangeRates[$key])) {
                $convertedAmount = $amount * $exchangeRates[$key];
            } else {
                $convertedAmount = "Conversion not available";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Currency Calculation</title>
    <meta name="description" content="CENG 311 Inclass Activity 5" />
</head>
<body>
    <form action="activity5.php" method="GET">
        <table>
            <tr>
                <td>From:</td>
                <td><input type="number" step="0.01" name="amount" value="<?php echo htmlspecialchars($amount); ?>"/></td>
                <td>Currency:</td>
                <td>
                    <select name="from_currency">
                        <option value="USD" <?php echo ($from == 'USD') ? 'selected' : ''; ?>>USD</option>
                        <option value="CAD" <?php echo ($from == 'CAD') ? 'selected' : ''; ?>>CAD</option>
                        <option value="EUR" <?php echo ($from == 'EUR') ? 'selected' : ''; ?>>EUR</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>To:</td>
                <td><input type="text" readonly value="<?php echo htmlspecialchars($convertedAmount); ?>"/></td>
                <td>Currency:</td>
                <td>
                    <select name="to_currency">
                        <option value="USD" <?php echo ($to == 'USD') ? 'selected' : ''; ?>>USD</option>
                        <option value="CAD" <?php echo ($to == 'CAD') ? 'selected' : ''; ?>>CAD</option>
                        <option value="EUR" <?php echo ($to == 'EUR') ? 'selected' : ''; ?>>EUR</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="3"></td>
                <td><input type="submit" value="convert"/></td>
            </tr>
        </table>
    </form>
</body>
</html>
