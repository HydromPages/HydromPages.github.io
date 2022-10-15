# Hardware Requirements

The Oasis Network is composed of multiple classes of nodes and services such
as:

* Consensus validator or non-validator node
* Emerald ParaTime compute or client node
* Emerald Web3 gateway with PostgreSQL
* Cipher ParaTime compute or client node

This page describes the **minimum** and **recommended** system hardware
requirements for running different types of nodes on the Oasis Network.

:::caution

If you configure a system with slower resources than the recommended values, you
run the risk of being underprovisioned, causing proposer node timeouts and
synchronization delays. This could result in losing stake and not participating
in committees.

If you run out of memory or storage, the Oasis node process will be forcefully
killed. This could lead to state corruption, losing stake and not participating
in committees.

:::


### CPU {#suggested-minimum-configurations}

* Consensus validator or non-validator node:
  * Minimum: 2.0 GHz x86-64 CPU with [AES instruction set] support
  * Recommended: 2.0 GHz x86-64 CPU with 2 cores/vCPUs with
    [AES instruction set] and [AVX2] support

* Emerald ParaTime compute node and all ParaTime client nodes:
  * Minimum: 2.0 GHz x86-64 CPU with [AES instruction set] support
  * Recommended: 2.0 GHz x86-64 CPU with 4 cores/vCPUs with
    [AES instruction set] and [AVX2] support

* Emerald Web3 gateway with PostgreSQL:
  * Minimum: 2.0 GHz x86-64 CPU
  * Recommended: 2.0 GHz x86-64 CPU with 2 cores/vCPUs

* Cipher ParaTime compute node:
  * Minimum: 2.0 GHz x86-64 CPU with [AES instruction set] and [Intel SGX] support
  * Recommended: 2.0 GHz x86-64 CPU with 2 cores/vCPUs with
    [AES instruction set], [Intel SGX] and [AVX2] support

:::info

During regular workload your node will operate with the minimal CPU resources.
However, if put under heavy load it might require more cores/vCPUs (e.g. an
Emerald ParaTime client node behind a public Emerald Web3 gateway).

The [AES instruction set] support is required by [Deoxys-II-256-128], a
Misuse-Resistant Authenticated Encryption (MRAE) algorithm, which is used for
encrypting ParaTime's state.

The [Advanced Vector Extensions 2 (AVX2)][AVX2] support enables faster Ed25519
signature verification which in turn makes a node sync faster.

The [Intel SGX] support is required if you want to run Paratime compute nodes
that use a Trusted Execution Environment (TEE).

:::

[AES instruction set]: https://en.wikipedia.org/wiki/AES_instruction_set
[Deoxys-II-256-128]: https://sites.google.com/view/deoxyscipher
[AVX2]:
  https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2
[Intel SGX]:
  https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html


### Memory

* Consensus validator or non-validator node:
  * Minimum: 4 GB of ECC RAM
  * Recommended: 8 GB of ECC RAM

* All ParaTime compute or client nodes:
  * Minimum: 8 GB of ECC RAM
  * Recommended: 16 GB of ECC RAM

* Emerald Web3 gateway with PostgreSQL:
  * Minimum: 4 GB of ECC RAM
  * Recommended: 8 GB of ECC RAM

:::info

During regular workload your node will operate with less than the minimum amount
of memory. However, at certain time points, it will absolutely require more
memory. Examples of such more resource intensive time points are the initial
state sync, BadgerDB migration when upgrading a node to a new major version of
the Oasis Core, generating storage checkpoints with BadgerDB, periodic BadgerDB
compactions...

:::


### Storage

* Consensus validator or non-validator node:
  * Minimum: 400 GB of SSD or NVMe fast storage
  * Recommended: 700 GB of SSD or NVMe fast storage

* Emerald ParaTime compute or client node (in addition to the consensus storage requirements):
  * Minimum: 400 GB of SSD or NVMe fast storage
  * Recommended: 700 GB of SSD or NVMe fast storage

* Emerald Web3 gateway with PostgreSQL:
  * Minimum: 300 GB of SSD or NVMe fast storage
  * Recommended: 500 GB of SSD or NVMe fast storage

* Cipher ParaTime compute or client node (in addition to the consensus storage requirements):
  * Minimum: 200 GB of SSD or NVMe fast storage
  * Recommended: 300 GB of SSD or NVMe fast storage

:::caution

Consensus and ParaTime state is stored in an embedded [BadgerDB] database which
was [designed to run on SSDs][badgerdb-ssds]. Hence, we **strongly discourage**
trying to run a node that stores data **on classical HDDs**.

:::

:::info

The consensus layer and ParaTimes accumulate state over time. The speed at which
the state grows depends on the number of transactions on the network and
ParaTimes.

For example, a consensus non-validator node on the Mainnet accumulated:

* 280 GB of consensus state in ~1 year between Apr 28, 2021 and Apr 11, 2022 (since the [Cobalt upgrade])
* 32 GB of consensus state in ~1 month since the [Damask upgrade]

For example, an Emerald client node on the Mainnet additionally accumulated:

* 260 GB of Emerald ParaTime state in ~5 months between Nov 18, 2021 and Apr 11, 2022 (since the [Emerald Mainnet launch])
* 25 GB of Emerald ParaTime state in ~1 month since the [Damask upgrade]

For example, an Emerald Web3 gateway with PostgreSQL encountered:

* 210 GB of database growth in ~5 months between Nov 18, 2021 and Apr 11, 2022 (since the [Emerald Mainnet launch])

:::

:::tip

Dump & restore upgrades (e.g. [Damask upgrade], [Cobalt upgrade]) include state
wipes which will free the node storage. Historical state can be accessed by
running a separate archive node.

:::

:::info

You can configure your node _not to_ keep a complete state from the genesis
onward. This will reduce the amount of storage required for the consensus and
ParaTime state.

To enable pruning of the consensus state set the
`consensus.tendermint.abci.prune.strategy` and
`consensus.tendermint.abci.prune.num_kept` parameters appropriately in your
[node's configuration].

To enable pruning of the ParaTime state set the
`runtime.history.pruner.strategy` and `runtime.history.pruner.num_kept`
parameters appropriately in your [node's configuration].

:::

[BadgerDB]: https://dgraph.io/docs/badger/
[badgerdb-ssds]: https://dgraph.io/docs/badger/design/
[Cobalt upgrade]: ../../mainnet/previous-upgrades/cobalt-upgrade.md
[Damask upgrade]: ../../mainnet/damask-upgrade.md
[Emerald Mainnet launch]:
  https://medium.com/oasis-protocol-project/oasis-emerald-evm-paratime-is-live-on-mainnet-13afe953a4c9
[node's configuration]: ../validator-node/README.md#configuring-the-oasis-node


### Network

* Consensus validator node and Emerald ParaTime compute node:
  * Minimum: 200 Mbps internet connection with low latency
  * Recommended: 1 Gbps internet connection with low latency

:::info

During regular workload your node will receive much less network traffic.
However, at certain time points when huge bursts of transactions arrive, you
need to assure that it doesn't timeout.

:::
