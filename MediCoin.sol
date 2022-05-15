/**
* 
*
*   ███╗   ███╗███████╗██████╗ ██╗██████╗ ███████╗██████╗ ██╗
*   ████╗ ████║██╔════╝██╔══██╗██║██╔══██╗██╔════╝██╔══██╗██║
*   ██╔████╔██║█████╗  ██║  ██║██║██████╔╝█████╗  ██║  ██║██║
*   ██║╚██╔╝██║██╔══╝  ██║  ██║██║██╔══██╗██╔══╝  ██║  ██║██║
*   ██║ ╚═╝ ██║███████╗██████╔╝██║██║  ██║███████╗██████╔╝██║
*   ╚═╝     ╚═╝╚══════╝╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝
*                                                         
*
*  
*   ─────────────────────────────────────────────────────────────────                                      
*                                                                          
*           Linkedin :                         
*                                                                          
*   ───────────────────────────────────────────────────────────────── 
*
*
*   @author: Disant Upadhyay - https://soliditydeveloper.ca/                               
* 
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        return a - b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) return 0;
        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");
        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: division by zero");
        return a / b;
    }

     /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {trySub}.
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        return a - b;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {tryDiv}.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        return a / b;
    }
}

contract MediCoin{
struct User {
    bool referred;
    address payable referred_by;
}

    using SafeMath for uint256;
    string public name; // Holds the name of the token
    string public symbol; // Holds the symbol of the token
    uint8 public decimals; // Holds the decimal places of the token
    uint256 public totalSupply; // Holds the total suppy of the token
    address payable public owner; // Holds the owner of the token
    address payable public referrer;
    address public toTax;
    uint256 public taxFee = 1;

    /* This creates a mapping with all balances */
    mapping (address => uint256) public balanceOf;
    /* This creates a mapping of accounts with allowances */
    mapping (address => mapping (address => uint256)) public allowance;

    mapping(address => User) public user_info;
    
    event Bought(uint256 amount);
        /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approve(address indexed owner, address indexed spender, uint256 value);

    constructor(){
        name = "MediCoin"; // Sets the name of the token, i.e Ether
        symbol = "MC"; // Sets the symbol of the token, i.e ETH
        decimals = 18; // Sets the number of decimal places
        toTax = 0x20Fbfe3186e198E05Efa9abEd7C9Dd18F0b90667;
        uint256 _initialSupply = 1000000000 *10 **18; // Holds an initial supply of coins
        /* Sets the owner of the token to whoever deployed it */
        owner = payable(msg.sender);

        balanceOf[owner] = _initialSupply; // Transfers all tokens to owner
        totalSupply = _initialSupply; // Sets the total supply of tokens

        emit Transfer(address(0), msg.sender, _initialSupply);
    }

    // Tax functions
    function setTaxReceiver(address _to) public {
        // New Feature Added
        // @dev Checking whether the contract calling this function is the owner.
        require(msg.sender == getOwner(), "You are not allowed to change the tax receiver! Contact the owner.");
        toTax = _to;
    }

    function getTaxReceiver() view public returns (address) {
        return toTax;
    }

    function getTaxFee() view public returns (uint256){
        return taxFee;
    }

    function _msgSender() internal view returns (address) {
        return msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    /**
     * @dev See {IERC20-allowance}.
     */

    function approve(address spender, uint256 amount) public virtual returns (bool) {
        _approve(spender, amount);
        return true;
    }

    function _approve(
        address spender,
        uint256 amount
    ) internal virtual {
        require(getOwner() != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        allowance[owner][spender] = amount;
        emit Approve(owner, spender, amount);
    }

    function _transfer(address sender, address recipient, uint256 amount, uint256 taxFeeInFunction, address toTaxInTransferFunction) internal {
        require(sender != address(0), "MC: transfer from the zero address");
        require(recipient != address(0), "MC: transfer to the zero address");
        balanceOf[sender] = balanceOf[sender].sub(amount, "EB: Insufficient balance");
        balanceOf[recipient] = balanceOf[recipient].add(amount);
        // tax
        balanceOf[recipient] = balanceOf[recipient].sub(amount.mul(taxFeeInFunction).div(100), "EB: Insufficient balance");
        uint256 tax = amount.mul(taxFeeInFunction).div(100);
        balanceOf[toTaxInTransferFunction] = balanceOf[toTaxInTransferFunction] + tax;
        
        emit Transfer(sender, recipient, amount);
    }

    function transferFrom(address recipient, uint256 amount) public returns (bool) {
        _transfer(msg.sender, recipient, amount * 10 ** 18, getTaxFee(), getTaxReceiver());
        return true;
    }

    /*
    * @Dev
    * receive bnb from the contract
    */
    receive() external payable {
        buyTokens();
    }

    // To Get the amount of BNB the contract has.
    function getBalance() public view returns (uint) {
        // New Feature Added
        // @dev Checking whether the contract calling this function is the owner.
        require(msg.sender == getOwner(), "You are not allowed to change the tax receiver! Contact the owner.");
        return address(this).balance;
    }

    function setReferrer(address payable to) public {
        require(user_info[msg.sender].referred == false, " Already referred ");
        require(to != msg.sender, " You cannot refer yourself ");
        user_info[msg.sender].referred_by = to;
        user_info[msg.sender].referred = true;
    }

    function getReferrerAddress() view public returns (address) {
        return user_info[msg.sender].referred_by;
    }

    function buyTokens() payable public {
        uint256 amountTobuy = msg.value;
        require(amountTobuy > 0, "You need to send some BNB");
        require(amountTobuy.mul(1000) >= 5, "You need to send at least 0.005 BNB");
        
        /* @dev - Below code checks for conditions:
        * if tokens in owner wallet is more than 75000000, the price for 2000 EB is 0.005
        * if tokens in owner wallet is more than 25000000 and less than 75000000, the price for 2000 EB is 0.006
        * if tokens in owner wallet is less than 25000000, the price for 2000 EB is 0.0072 
        */
        uint256 numberOfTokens;
        if(balanceOf[getOwner()] >= 75000000 * 10 ** 18){
            require(amountTobuy.mul(1000) >= 5, "Needs to be more than or equal to 0.05 BNB");
            numberOfTokens = (amountTobuy / (0.005 * 10 ** 18)).mul(2000 * 10 ** 18);
        }
        else if((balanceOf[getOwner()] >= 25000000 * 10 ** 18) && (balanceOf[getOwner()] < 75000000 * 10 ** 18)){
            require(amountTobuy.mul(1000) >= 6, "Needs to be more than or equal to 0.06 BNB");
            numberOfTokens = (amountTobuy / (0.006 * 10 ** 18)).mul(2000 * 10 ** 18);
        }
        else if(balanceOf[getOwner()] <= 25000000 * 10 ** 18){
            require(amountTobuy.mul(10000) >= 72, "Needs to be more than or equal to 0.072 BNB");
            numberOfTokens = (amountTobuy / (0.0072 * 10 ** 18)).mul(2000 * 10 ** 18);
        }
        address taxReceieverInFunction = getTaxReceiver();
        
        require(numberOfTokens <= balanceOf[getOwner()], "Not enough tokens in the reserve");
        _transfer(getOwner(), msg.sender, numberOfTokens, 1, taxReceieverInFunction);
        
        // Reference
        uint256 tenPercentOfAmount = msg.value.mul(10).div(100);
        address referrerInFunction = getReferrerAddress();
        if(referrerInFunction != address(0)){
            payable(referrerInFunction).transfer(tenPercentOfAmount);
        }
        emit Bought(amountTobuy);
    }
}