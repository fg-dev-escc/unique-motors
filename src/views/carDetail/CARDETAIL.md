# Car Detail Structure

## Files
- `CarDetail.jsx` - main car detail page component
- `carDetailConfig.js` - auction-specific data, styles, and configuration

## Data Flow
- Uses URL params to get car ID from `/subasta/:id` route
- Displays car details, auction status, and bidding functionality
- Real-time countdown timer for auction end time
- Handles bid submission and validation

## Template Adaptation
The car detail page adapts the original template for auction context:
1. **Breadcrumb**: "Detalle de Subasta" instead of "Car Single"
2. **Pricing**: Shows current bid amount with "/ puja actual"
3. **Action Button**: "Hacer Puja" instead of "Rent Now"
4. **Status**: Shows auction countdown or "Subasta Terminada"
5. **Terms**: Seller info, transfer and disposition fees
6. **Reviews Tab**: Converted to "Historial de Pujas" with bidder info
7. **Related Items**: Other active auctions

## Auction Features
- Real-time countdown timer
- Bid validation with minimum amounts
- Bid history display
- Auction status indicators
- Spanish language throughout