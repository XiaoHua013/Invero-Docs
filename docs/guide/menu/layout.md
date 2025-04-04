---
sidebar_position: 4
---

# 布局

布局是属于面板的一个属性，通过字符或字符串的相对排布来确定图标的位置
减少计算行列、槽位等繁琐操作，提高效率

## 示例

```yaml
layout: |-
  #########
  |       |
  |   *   |
  |       |
  #########
```

图标可以使用 `#`, `|`, `*` 作为 ID，来快速确定默认槽位

## 字符串标识

除了单字符图标 ID 支持外，你还可以通过 \`   \` 引来的长字符串来实现布局  
例如

```yaml
layout: |-
  ########`Close`

  `Pre`#######`Next`
```

可使用的图标 ID 有 `#`，`Close`, `Pre`, `Next`

:::info 注意
通过字符串实现图标 ID 的布局本身会一定程度地降低直观性  
而复杂工程使用的过多不同的字符也会降低可读性和美观性

因此对于具有大量不同图标的工程，还是建议让部分功能性图标使用传统槽位布局
:::