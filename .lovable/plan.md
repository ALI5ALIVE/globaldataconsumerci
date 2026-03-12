

# Make Slide 2 ("Your Monday Morning") Look Like an Email Inbox

## Current State
The slide shows 7 notification-style cards sliding in from alternating sides. It looks like stacked alerts, not an inbox.

## Proposed Design
Restyle to resemble a real email inbox (think Outlook/Gmail):

### Visual Structure
- **Inbox chrome**: A container styled like an email client — toolbar at top with "Inbox (7)" title, a search bar placeholder, and filter icons
- **Email rows**: Each notification becomes a table-like row with:
  - Unread indicator (blue dot on left)
  - Sender name (bold, left column): "CEO", "Strategy", "Market Sizing", etc.
  - Subject/preview (main column): The existing message text
  - Timestamp (right): "9:02 AM", "9:14 AM", etc. (staggered Monday morning times)
  - Hover state with subtle highlight
- **Unread count badge** on the inbox header
- Rows animate in sequentially (top to bottom) like emails arriving

### File Changes

**`src/components/consumer-pitch/CPSlide1MondayMorning.tsx`**:
- Add sender names extracted from existing text (e.g., "CEO", "Head of Strategy", "Finance / Market Intel", "Competitive Intel", "Innovation Lead", "Commercial / Sales", "Procurement")
- Restructure each row into sender | subject | time columns
- Wrap in an inbox-style container with rounded corners, header bar, and border
- Keep sequential motion animations but change from slide-in to fade-in row appearance
- Keep bottom quote

