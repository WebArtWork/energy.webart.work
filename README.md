# Energy

Energy is not a bill-comparison widget — it's a **full energy management
ecosystem**. It connects **consumers → energy systems → meters/usage →
installers → equipment → producers → generation facilities → suppliers →
providers/tariffs → costs** in one platform, so a household's or business's
entire energy footprint — consumption, generation, equipment, and spend —
lives in one place instead of being scattered across utility portals,
paper invoices, and installer phone calls.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet.

## The core entities

- **Energy System** — a consumer's or business's installed setup: solar
  array, battery storage, EV charger, generator, or a combination. Tracks
  capacity, installation date, installer, warranty, and status.
- **Meter / Usage Record** — periodic energy consumption and/or production
  readings tied to a system or facility, used to compute cost, savings, and
  trends over time.
- **Provider / Tariff** — an energy retailer or utility and the rate plan a
  consumer is on (fixed, time-of-use, feed-in tariff), enabling side-by-side
  cost comparison.
- **Equipment** — solar panels, batteries, inverters, chargers, generators,
  and components available from suppliers, each with specs, pricing, and
  compatibility information.
- **Installation Job** — a scoped piece of work (design, install, configure,
  maintain, repair) linking a consumer, an installer, the system involved,
  equipment used, cost, and status.
- **Facility** — a producer's generation site: a solar farm, wind farm, or
  other production asset, with location, capacity, and connected equipment.
- **Production Stats** — a facility's output over time: generation volume,
  capacity factor, uptime, and maintenance events.
- **Sale / Order** — an equipment purchase from a supplier, or an energy
  sale from a producer, tracking quantities, pricing, and fulfillment.
- **Cost & Savings Record** — the rolled-up economics for a consumer or
  business: usage cost, generation offset, and net savings versus their
  chosen provider/tariff.

## Roles

Every person or business on the platform plays one or more of these roles.
Each has its own marketing/onboarding page (`/for-*`):

1. **Consumer** — tracks energy usage, manages energy systems, compares
   providers, monitors costs, and purchases energy-related services.
   ([/for-consumers](src/app/pages/for-consumers))
2. **Installer** — designs, installs, configures, maintains, and repairs
   solar, battery, charging, generator, and other energy systems.
   ([/for-installers](src/app/pages/for-installers))
3. **Producer** — manages energy generation facilities, production
   statistics, capacity, storage, and energy sales.
   ([/for-producers](src/app/pages/for-producers))
4. **Supplier** — sells energy equipment, components, batteries, solar
   panels, generators, chargers, and related products.
   ([/for-suppliers](src/app/pages/for-suppliers))

## Status

Static demo, no backend or persistence yet.
